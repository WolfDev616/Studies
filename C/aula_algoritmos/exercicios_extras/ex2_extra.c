#include <stdlib.h>
#include <stdio.h>

typedef struct {

    int p;
    int q;

} rational;

int reduce(int a, int b) {

    int mdc;
    int result;
    
    
    if (b!=0) {
        do {
            // Coloquei 30 como um número alto aleatório pra controle do mdc
            for(int i=1;i<30;i++) {
                if ((a%i==0) && (b%i==0)) {
                    mdc = i;
                    a = a/mdc;
                    b = b/mdc;
                }
            }
         } while (mdc != 1); 
    }

    printf("The rational that represents this reduction is %d/%d.\n", a, b);
}

int sum(int a, int b) {
    
    int numerator = a + b;
    int denominator = 1;

    printf("The rational form of the sum is %d/%d.\n", numerator, denominator);

}

int main() {
    
    float a, b;
    rational r;
    
    printf("Insert two numbers:\n");
    scanf("%f %f", &a, &b);
    
    int reduce_result = reduce(a, b);
    
    r.p = a;
    r.q = b;

    reduce(r.p, 1);
    reduce(r.q, 1);


    int sum_result = sum(r.p, r.q);

    return 0;
}