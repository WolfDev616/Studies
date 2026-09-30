#include <stdlib.h>
#include <stdio.h>
#include <string.h>

char* inverte_string(char str[]) {

    char *str_inv = malloc(strlen(str)* sizeof(char));

    for (int i=0;i<strlen(str);i++) {

        str_inv[(strlen(str)- 1)-i] = str[i];

    }

    return str_inv;

}


int main() {

    char texto[100];

    fgets(texto, 100, stdin);

    texto[strlen(texto)-1] = '\0'; // Remove \n

    char* texto_invertido = inverte_string(texto);

    printf("%s\n", texto_invertido);

    free(texto_invertido); // libera espaço alocado

    return 0;
}