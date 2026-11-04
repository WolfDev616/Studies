#include <stdio.h>
#include <stdlib.h>

long long int find_square_root(int n) {

    long long int doubleN = n * n;

    long long int start = 0;
    long long int end = n;
    long long int mid;
    
    while (start <= end) {
        mid = (start + end) / 2;
        if (mid*mid == n) {
            return mid;
        }
        else if(mid*mid < n) {
            start = mid + 1;
        } else if (mid*mid > n) {
            end = mid - 1;
        }
    }
}

int main() {
    
    long long int n;
    scanf("%lld", &n);

    printf("The square root is %lld\n", find_square_root(n));

    return 0;
}