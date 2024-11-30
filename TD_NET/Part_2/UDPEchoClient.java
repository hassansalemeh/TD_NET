package Part_2;

import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.util.Scanner;

public class UDPEchoClient {
    public static void main(String[] args) {
        try (DatagramSocket socket = new DatagramSocket()) {
            InetAddress serverAddress = InetAddress.getByName("localhost");
            byte[] buffer = new byte[1024];
            Scanner scanner = new Scanner(System.in);

            System.out.println("Entrez les messages à envoyer (type 'exit' pour quitter):");
            while (true) {
                String message = scanner.nextLine();
                if (message.equalsIgnoreCase("exit"))
                    break;

                // Envoi au serveur
                buffer = message.getBytes();
                DatagramPacket request = new DatagramPacket(buffer, buffer.length, serverAddress, 9876);
                socket.send(request);

                // Réception de la réponse
                DatagramPacket response = new DatagramPacket(buffer, buffer.length);
                socket.receive(response);
                System.out.println("Réponse du serveur : " + new String(response.getData(), 0, response.getLength()));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
