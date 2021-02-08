# INTRO TO OBJECT ORIENTED PROGRAMMING

Pillars of OOP

1. Encapsulation

   - the division of responsibility
   - object is most useful when it hides complex functionality from other parts of code
   - easier to test and build complex systems when each part of system has its own purpose
   - example:
     - an ear doesnt need to know how an eye works
     - break up roles into separate objects:
     - ear: listens for sounds
     - eye: looks for visual signals
     - face: place eye and ear where they are useful
     - brain: make sense of sensory signals
   - objects interact with each other through props/methods w/o needing to know how those actions are handled

2. Abstraction

   - consideration of how objects are similar
   - hide implementation details within classes
   - example: pens and pencils are similar, may be able to group certain properties into parent class

3. Inheritance

   - classes can pass along properties & methods to other classes
   - sometimes objects may have many similar properties
   - indicate that a parent class could be beneficial
   - example: cats and dogs
     - cats and dogs share many properties
     - both have a name, breed, color, owner, etc
     - both may be able to perform certain tricks
     - have different properties (dogs bark, cats meow)
     - makes sense to create an Animal parent class that Dog and Cat can inherit from

4. Polymorphism
   - one method can have different implementations because the result is equivalent
   - accomplishing same result in another fashion
   - example: pens and pencil classes may have "erase" method
     - for pens, that would require the use of white out
     - for pencisl, that would require the usee of an erasor
     - the result is the same
