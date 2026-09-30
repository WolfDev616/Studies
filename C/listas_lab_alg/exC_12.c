#include <stdlib.h>
#include <stdio.h>
#include <string.h>


typedef struct{
int tabuleiro[5][5];
int pontos;
} Jogo;

Jogo* inicializaJogo(){

    Jogo* j = malloc(1* sizeof(Jogo));

    for(int i=0; i<5; i++){
        for(int k=0; k<5; k++){
        // inicializa linha i, coluna k da matriz do jogo
    
        scanf("%d", &j->tabuleiro[i][k]);
        }
    }
    // inicializa pontos com 0;
    j->pontos = 0;
    // retorna o endereço do espaço alocado dinamicamente
    return j;
}

int main() {

    Jogo* j = inicializaJogo();

    int linha, coluna;
    
    scanf("%d %d", &linha, &coluna);
    // While encerra quando linha ou coluna forem negativos.
    while((linha >= 0) && (coluna >= 0)){
        if(j->tabuleiro[linha][coluna] == 1){
            j->pontos+=2;
        } else {
            j->pontos-=1;
        }
        scanf("%d %d", &linha, &coluna);
    }
    printf("Acertos=%d\n", j->pontos);
    // Libera espaço alocado
    free(j);
    return 0;
}
    