package com.java.shortlistedAssignments.cloudvadenta;
import java.util.Random;

public class SuffleArray
{
    public static void main(String[] args) {
        int nums[]={1,2,3,4,5,6};
        int n=nums.length;
        int [] resultArray=	SuffleArray(nums,n);
        printArray(resultArray);

    }
    public static int[] SuffleArray(int []nums,int n){
        Random ran=new Random();
        for(int i=n-1;i>0;i--){
            int p=ran.nextInt(i+1);
            int temp=nums[i];
            nums[i]=nums[p];
            nums[p]=temp;
        }
        return nums;
    }
    public static void printArray(int[]nums){
        for(int i:nums){
            System.out.print(i+" ");
        }
    }
}
