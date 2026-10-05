import random 

carboidrato = ["arroz", "arroz e feijão", "arroz integral", "gnnochi", "batata", "mandioca"]

proteina = ["peito de frango", "coxa de frango", "alcatra", "paleta", "costelinha de porco", "almôndega", "linguiça", "pernil", "frango à passarinho"]

vegetais = ["batata", "brocolis", "couve-flor", "ervilha", "vagem", "cenoura", "repolho", "inhame", "abobrinha", "abóbora"]

salada = ["alface", "rúcula", "tomate", "espinafre", "couve"]

for day in range(7):
    print(f"Dia {day + 1}:")
    print(f"Carboidrato: {random.choice(carboidrato)} | Proteína: {random.choice(proteina)} | Vegetais: {random.choice(vegetais)} | Salada: {random.choice(salada)}")
    print("-" * 100)
    