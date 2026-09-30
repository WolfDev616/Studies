#include <stdlib.h>
#include <stdio.h>
#include <string.h>

char* lePalavra() {

    char* word = malloc(100 * sizeof(char));

    scanf("%s", word);

    return word;

}

int main() {
    
    char *str1, *str2;

    while(1){
        str1 = lePalavra();
        str2 = lePalavra();

        if(feof(stdin)) break;

        // Logica anagrama

        for (int i=0;i<strlen(str1);i++) {
            for (int j=0; j<strlen(str2);j++) {
                if (str1[i] == str2[j]) {
                    printf("As strings são anagramas.\n");
                }
                else {
                    printf("As strings não são anagramas.\n");
                }
            }
            break;
        }

        free(str1);
        free(str2);
    }

    return 0;
    
}