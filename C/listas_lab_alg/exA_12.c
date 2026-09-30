#include <stdlib.h>
#include <stdio.h>


double* duplica_double(double n) {

    double *num = malloc(n* sizeof(double));

    *num = (n) * 2;

    return num;

}


int main() {

    double x;
    
    scanf("%lf", &x);
    
    double* y = duplica_double(x);
    
    printf("%.2lf\n", *y);
    
    free(y); // libera espaço alocado

    return 0;
}