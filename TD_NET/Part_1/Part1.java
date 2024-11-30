package Part_1;

import java.net.InetAddress;


public class Part1 {
    public static void main(String[] args) {
        try {
            // Afficher l'adresse IP et le hostname de la machine locale
            InetAddress localHost = InetAddress.getLocalHost();
            System.out.println("Adresse IP Locale : " + localHost.getHostAddress());
            System.out.println("Nom d'hôte Local : " + localHost.getHostName());

            // Passer différents noms d'hôtes en ligne de commande
            for (String host : args) {
                InetAddress[] addresses = InetAddress.getAllByName(host);
                System.out.println("Résolution pour : " + host);
                for (InetAddress address : addresses) {
                    System.out.println("\t" + address.toString());
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
