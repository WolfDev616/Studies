#include <stdio.h>
#include <stdlib.h>
#include "lista.h"

void FLVazia(TipoLista *Lista) {
    Lista->Primeiro = (TipoApontador) malloc(sizeof(TipoCelula));
    Lista->Ultimo = Lista->Primeiro;
    Lista->Primeiro->Ant = NULL;
    Lista->Primeiro->Prox = NULL;
}

int Vazia(TipoLista Lista) {
    return (Lista.Primeiro == Lista.Ultimo);
}

void Insere(TipoItem x, TipoLista *Lista) {
    TipoApontador novo = (TipoApontador) malloc(sizeof(TipoCelula));
    novo->Item = x;
    novo->Ant = Lista->Ultimo;
    novo->Prox = NULL;
    Lista->Ultimo->Prox = novo;
    Lista->Ultimo = novo;
}

TipoApontador Procura(TipoItem x, TipoLista *Lista) {
    TipoApontador Aux = Lista->Primeiro->Prox;
    while (Aux != NULL && Aux->Item.Chave != x.Chave)
        Aux = Aux->Prox;
    return Aux;
}

void Retira(TipoApontador p, TipoLista *Lista, TipoItem *Item) {
    
    // Guarda o item antes de remover
    *Item = p->Item;

    // Ajusta os ponteiros
    p->Ant->Prox = p->Prox;

    // Analisa o caso de p->Prox ser nulo.
    if (p->Prox == NULL) {
        Lista->Ultimo = p->Ant;
    } else {
        p->Prox->Ant = p->Ant;
    }

    // Libera p;
    free(p);
}

void Imprime(TipoLista Lista) {
    TipoApontador Aux = Lista.Primeiro->Prox;
    while (Aux != NULL) {
        printf("%d\n", Aux->Item.Chave);
        Aux = Aux->Prox;
    }
}

void Inverte(TipoLista *Lista) {
    TipoApontador atual, proximo, primeiroReal, ultimoReal = NULL;
    if (Vazia(*Lista)) return;

    primeiroReal = Lista->Primeiro->Prox;
    atual = primeiroReal;
    /* troca Ant e Prox de cada célula */
    while (atual != NULL) {
        proximo = atual->Prox;
        atual->Prox = atual->Ant;
        atual->Ant = proximo;
        ultimoReal = atual;
        atual = proximo;
    }
    /* religa a cabeça e as pontas */
    Lista->Primeiro->Prox = ultimoReal;
    ultimoReal->Ant = Lista->Primeiro;
    primeiroReal->Prox = NULL;
    Lista->Ultimo = primeiroReal;
}
