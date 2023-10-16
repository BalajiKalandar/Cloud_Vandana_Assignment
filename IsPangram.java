package com.java.shortlistedAssignments.cloudvadenta;

public class IsPangram {
    public static void main(String[] args) {
        String sentence="Ae4bcdefghi5j3k2L5mno2PQrstuvwxy-z";
        int len=sentence.length();
        System.out.println(checkPangram(sentence,len));
    }
public static boolean checkPangram(String sentence,int len){
        boolean[]input=new boolean[26];
    sentence=sentence.toLowerCase();
    for (int i = 0; i < len; i++) {
        char currChar=sentence.charAt(i);

        if(Character.isLetter(currChar)){
            int index=currChar-'a';
            input[index]=true;
        }

    }
    for(boolean letterFound:input){
        if(!letterFound){
           return false;
        }
    }
    return true;
}
}