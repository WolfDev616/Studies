import random 

carboidrato = ["arroz", "arroz integral", "spaghetti", "linguini", "penne", "gnnochi"]

proteina = ["peito de frango", "coxa de frango", "alcatra", "paleta", "costelinha de porco", "almôndega", "linguiça"]

vegetais = ["batata", "brocolis", "couve-flor", "ervilha", "vagem", "cenoura", "repolho"]

salada = ["alface", "rúcula", "tomate", "espinafre", "couve", "almeirão"]

for day in range(7):
    print(f"Day {day + 1}:")
    print(f"Carboidrato: {random.choice(carboidrato)} | Proteína: {random.choice(proteina)} | Vegetais: {random.choice(vegetais)} | Salada: {random.choice(salada)}")
    print("-" * 50)
    