import java.util.Scanner;

public class CelciusConverter {

    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);
        
        /* Input temperature in Celsius from user */
        System.out.print("Please enter temperature in Celsius : ");
        float C = in.nextFloat();
        
        /* Converting Celsius to Fahrenheit */
        float F = C * (9f / 5) + 32;
        
        /* Print result */
        System.out.println("Fahrenheit temperature is =  " + F + " degrees");
       
    }
}
