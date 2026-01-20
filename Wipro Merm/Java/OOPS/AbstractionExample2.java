package OOPS;

// Write a program for bank account to know the balance after depositing
// and withdrawing the amount and also having the loan account facility
// to calculate the EMI and monthly EMI paid by customer using card or cash

interface BaseClass {
    void deposit(double amount);
    void withdraw(double amount);
    void showBalance();
}

interface SubClass extends BaseClass {
    void amount();
    double calculateEMI(double loanAmount, double interestRate, int months);
    void payEMI(String mode);
}

class ChildClass implements SubClass {

    double balance = 5000;

    public void amount() {
        System.out.println("Account Balance: " + balance);
    }

    public void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: " + amount);
    }

    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Insufficient Balance");
        }
    }

    public void showBalance() {
        System.out.println("Current Balance: " + balance);
    }

    public double calculateEMI(double loanAmount, double interestRate, int months) {
        double r = interestRate / 12 / 100;
        return (loanAmount * r * Math.pow(1 + r, months)) /
               (Math.pow(1 + r, months) - 1);
    }

    public void payEMI(String mode) {
        System.out.println("EMI paid using: " + mode);
    }
}

public class AbstractionExample2 {
    public static void main(String[] args) {

        SubClass sc = new ChildClass();   // interface reference, class object

        sc.amount();
        sc.deposit(2000);
        sc.withdraw(1000);
        sc.showBalance();

        System.out.println("Monthly EMI: " +
                sc.calculateEMI(100000, 10, 12));

        sc.payEMI("Card");   // or "Cash"
    }
}
