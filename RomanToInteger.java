package com.java.shortlistedAssignments.cloudvadenta;

public class RomanToInteger {
    public static void main(String[] args) {
        String romanNumber="L";
        int len=romanNumber.length();
        System.out.println(returnInteger(romanNumber,len));
    }

public static int returnInteger(String romanNumber, int len){
        int result=0;
        int preValue=0;
       for(int i=len-1;i>=0;i--) {
           char letter=romanNumber.charAt(i);
           int intValue=basicValue(letter);

           if(intValue>=preValue){
               result+=intValue;
               preValue=intValue;
           }else{
               result-=intValue;
               preValue=intValue;
           }
       }

       return result;
    }

public static int basicValue(char c){
        switch (c){
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return 0;
        }

}
}