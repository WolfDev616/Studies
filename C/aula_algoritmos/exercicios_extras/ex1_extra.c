#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include "math.h" // Executar o código com -lm no final



typedef struct {
    char name[50];
    int x;
    int y;
} city;

float calculate_distance(city a, city b) {

    float distance = sqrt(pow((a.x-b.x), 2) + pow((a.y-b.y), 2));

    return distance;
}


int main() {

    int n;
    printf("Insert the number of cities:\n");
    scanf("%d", &n);
    
    city* city_vector = malloc(n*sizeof(city)); 

    printf("Now, insert the names and coordinates of the %d cities:\n", n);
    
    for (int i=0;i<n;i++) {
        
        printf("Name of the city %d:\n", i+1);
        scanf("%s", city_vector[i].name);
        printf("Coordinate x of the city %s:\n", city_vector[i].name);
        scanf("%d", &city_vector[i].x);
        printf("Coordinate y of the city %s:\n", city_vector[i].name);
        scanf("%d", &city_vector[i].y);
    }
    
    // Creating matrix nxn
    
    int **dist_matrix = calloc(n, sizeof(int*));
    
    for (int i=0;i<n;i++) {
        dist_matrix[i] = calloc(n, sizeof(int));
    }
    
    // Reading matrix
    
    for (int i=0;i<n;i++) {
        for (int j=0;j<n;j++) {
            
            if (j!=i){
                dist_matrix[i][j] = calculate_distance(city_vector[i], city_vector[j]);
            } else {
                dist_matrix[i][j] = 0;
            }
        }
    }

    // Printing matrix
    
    for (int i=0;i<n;i++) {
        for (int j=0;j<n;j++) {
            if (j<n) {
                printf("%d ", dist_matrix[i][j]);
            } else if(j=n) {
                printf("%d", dist_matrix[i][j]);
            }
        }
        printf("\n");
    }


    
    do {

        char answer = 'n';

        char name_city1[50], name_city2[50];

        printf("Insert names of two of the cities:\n");
        printf("City 1:\n");
        scanf("%s", name_city1);
        printf("City 2:\n");
        scanf("%s", name_city2);

        // Calculating the distances

        for (int i=0;i<n;i++) {
            for (int j=0;j<n;j++) {
                //Pesquisei esta função strcmp pra comparar as strings
                if ((strcmp(city_vector[i].name, name_city1) == 0) && (strcmp(city_vector[j].name, name_city2) == 0)) {
                    float answer = calculate_distance(city_vector[i], city_vector[j]);
                    printf("The distante between %s and %s is %f km.\n", city_vector[i].name, city_vector[j].name, answer);
                } 
            }
        }
        
        printf("Do you want to check any other distance?(Y/n):\n");
        scanf(" %c", &answer);
        
        
        if (answer == 'Y') {
            continue;
        } else if (answer == 'n') {
            printf("Thanks for using the program!\n");
            break;
        }
        
    } while(1);

    
    return 0;
}