package CalculadoraPartidasRankeadas;

import java.util.Scanner;

public class CalculadoraPartidasRankeadas {
    public static void main(String[] args) {

        int saldoVitorias = calcularNivelVitorioso();
        String vitorioso = encontrarVitorioso(saldoVitorias);
        mostrarNivelHeroi(saldoVitorias, vitorioso);
    }

    public static int calcularNivelVitorioso() {
        Scanner teclado = new Scanner(System.in);
        System.out.println("Informe a quantidade de vitórias: ");
        int vitorias = teclado.nextInt();
        System.out.println("Informe a quantidade de derrotas: ");
        int derrotas = teclado.nextInt();
        int saldoVitorias = (vitorias - derrotas);
        teclado.close();
        return saldoVitorias;
    }

    public static String encontrarVitorioso(int saldoVitorias) {
        String vitorioso = " ";
        if (saldoVitorias < 11) {
            vitorioso = "Ferro";
        } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
            vitorioso = "Bronze";
        } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
            vitorioso = "Prata";
        } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
            vitorioso = "Ouro";
        } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
            vitorioso = "Diamante";
        } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
            vitorioso = "Lendário";
        } else if (saldoVitorias >= 101) {
            vitorioso = "Imortal";
        }
        return vitorioso;
    }

    public static void mostrarNivelHeroi(int saldoVitorias, String vitorioso) {
        System.out.printf("O Herói tem saldo de: %d e está no nível: %s", saldoVitorias, vitorioso);
    }

}
