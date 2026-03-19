from models import Animal, Dog, Cat, Parrot


def main():
    dog = Dog("Buddy", 3, 25.5, "Golden Retriever")
    cat = Cat("Whiskers", 5, 4.2, "orange")
    parrot = Parrot("Polly", 2, 0.3, 150)

    animals = [dog, cat, parrot]

    for animal in animals:
        print(animal)

    for animal in animals:
        print(animal.speak())

    for animal in animals:
        print(animal.info())

    print(dog.fetch())
    print(cat.purr())
    print(parrot.mimic("Hello, world!"))

    for animal in animals:
        print(f"{animal.name} is a Dog: {isinstance(animal, Dog)}")
        print(f"{animal.name} is a Cat: {isinstance(animal, Cat)}")
        print(f"{animal.name} is an Animal: {isinstance(animal, Animal)}")
        print()


if __name__ == '__main__':
    main()
