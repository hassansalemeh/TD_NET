package Part_3;

import java.io.*;
import java.net.*;

public class TCPWordCountClient {
    public static void main(String[] args) {
        if (args.length < 2) {
            System.out.println("Usage: java TCPWordCountClient <server> <file>");
            return;
        }

        try (Socket socket = new Socket(args[0], 6789);
                BufferedReader fileReader = new BufferedReader(new FileReader(args[1]));
                PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
                BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()))) {

            String line;
            while ((line = fileReader.readLine()) != null) {
                out.println(line);
            }
            out.println("xxxx"); // Signal de fin

            System.out.println("Réponse du serveur : " + in.readLine());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
