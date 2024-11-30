package Part_2;

import java.net.DatagramPacket;
import java.net.DatagramSocket;

public class UDPEchoServer {
    public static void main(String[] args) {
        try (DatagramSocket socket = new DatagramSocket(9876)) {
            byte[] buffer = new byte[1024];
            System.out.println("Serveur UDP prêt sur le port 9876...");

            while (true) {
                DatagramPacket request = new DatagramPacket(buffer, buffer.length);
                socket.receive(request);

                String receivedMessage = new String(request.getData(), 0, request.getLength());
                System.out.println("Reçu : " + receivedMessage);

                // Réponse au client
                DatagramPacket response = new DatagramPacket(request.getData(), request.getLength(),
                        request.getAddress(), request.getPort());
                socket.send(response);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
