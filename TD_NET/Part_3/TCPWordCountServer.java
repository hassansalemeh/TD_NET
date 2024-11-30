package Part_3;

import java.io.*;
import java.net.*;

public class TCPWordCountServer {
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(6789)) {
            System.out.println("Serveur TCP prêt sur le port 6789...");

            while (true) {
                Socket clientSocket = serverSocket.accept();
                System.out.println("Client connecté : " + clientSocket.getInetAddress());

                new Thread(() -> {
                    try (BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
                            PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true)) {

                        int wordCount = 0;
                        String line;
                        while (!(line = in.readLine()).equalsIgnoreCase("xxxx")) {
                            wordCount += line.split("\\s+").length;
                        }

                        out.println("Nombre total de mots : " + wordCount);
                        System.out.println("Nombre de mots envoyé au client : " + wordCount);

                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }).start();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
