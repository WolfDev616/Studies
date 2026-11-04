#include <stdio.h>
#include <stdlib.h>

int main() {

    int numbers[3]; 

    for (int i=0; i<3; i++) {
        scanf("%d", &numbers[i]);
    }
    

    for (int j=0; j<2; j++) {
        for (int i=0; i<2; i++) {

            if (numbers[i+1] > numbers[i]) {
                int aux = numbers[i+1];
                numbers[i+1] = numbers[i];
                numbers[i] = aux;
            }
        }
    }
    
    for (int i=0; i<3; i++) {
        printf("%d\n", numbers[i]);
    }
    
    return 0;
}
