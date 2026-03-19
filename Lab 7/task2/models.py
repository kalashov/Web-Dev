class Animal:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def speak(self):
        return f"{self.name} makes a sound"

    def info(self):
        return f"{self.name}, {self.age} years old, {self.weight} kg"

    def __str__(self):
        return f"Animal({self.name}, age={self.age}, weight={self.weight})"


class Dog(Animal):
    def __init__(self, name, age, weight, breed):
        super().__init__(name, age, weight)
        self.breed = breed

    def speak(self):
        return f"{self.name} says: Woof!"

    def fetch(self):
        return f"{self.name} fetches the ball"

    def __str__(self):
        return f"Dog({self.name}, breed={self.breed}, age={self.age})"


class Cat(Animal):
    def __init__(self, name, age, weight, color):
        super().__init__(name, age, weight)
        self.color = color

    def speak(self):
        return f"{self.name} says: Meow!"

    def purr(self):
        return f"{self.name} is purring"

    def __str__(self):
        return f"Cat({self.name}, color={self.color}, age={self.age})"


class Parrot(Animal):
    def __init__(self, name, age, weight, vocabulary_size):
        super().__init__(name, age, weight)
        self.vocabulary_size = vocabulary_size

    def speak(self):
        return f"{self.name} says: Squawk! I know {self.vocabulary_size} words!"

    def mimic(self, phrase):
        return f"{self.name} repeats: '{phrase}'"

    def __str__(self):
        return f"Parrot({self.name}, vocabulary={self.vocabulary_size} words, age={self.age})"
