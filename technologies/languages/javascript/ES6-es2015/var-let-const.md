# VAR LET CONST

* VAR
  * Does not have block scope, but function scope
  * JavaScript before executing the code actually moves all variables on top (something that is called hoisting)

* LET
  * block scoped version of var
  * Its scope is limited to the block, statement or expression where it's defined, and all the contained inner blocks

* CONST
  * Once a const is initialized, its value can never be changed again, and it can't be reassigned to a different value.
  * does not provide immutability, just makes sure that the reference can't be changed.
  * has block scope, same as let
