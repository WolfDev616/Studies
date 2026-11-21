#include <stdio.h>
#include <string.h>
#include "lista.h"

int main() {
    TipoLista lista;
    FLVazia(&lista);

    char cmd[10];
    while (scanf("%s", cmd) == 1) {
        if (strcmp(cmd, "i") == 0) {
            TipoItem item;
            scanf("%d", &item.Chave);
            Insere(item, &lista);

        } else if (strcmp(cmd, "r") == 0) {
            TipoItem procurado, removido = {0};
            scanf("%d", &procurado.Chave);
            TipoApontador p = Procura(procurado, &lista);
            if (p == NULL) {
                printf("nao encontrado: %d\n", procurado.Chave);
            } else {
                Retira(p, &lista, &removido);
                printf("retirado: %d\n", removido.Chave);
            }

        } else if (strcmp(cmd, "inv") == 0) {
            Inverte(&lista);

        } else if (strcmp(cmd, "imp") == 0) {
            Imprime(lista);

        } else if (strcmp(cmd, "impr") == 0) {
            /* percorre do último elemento até a célula cabeça usando Ant */
            TipoApontador p = lista.Ultimo;
            while (p != lista.Primeiro) {
                printf("%d\n", p->Item.Chave);
                p = p->Ant;
            }
        }
    }

    return 0;
}
