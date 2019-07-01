# VIMTUTOR

## RESUMEN DE LA LECCIÓN 1

1. El cursor se mueve utilizando las teclas de las flechas o las teclas hjkl.
         h (izquierda)     j (abajo)      k (arriba)      l (derecha)

2. Para acceder a Vim (desde el símbolo del sistema %) escriba:
     vim FILENAME <INTRO>

3. Para salir de Vim escriba: <ESC> :q! <INTRO> para eliminar todos
     los cambios.

4. Para borrar un carácter sobre el cursor en modo Normal pulse:  x

5. Para insertar texto en la posición del cursor estando en modo Normal:
          pulse   i   escriba el texto   pulse <ESC>

NOTA: Pulsando <ESC> se vuelve al modo Normal o cancela un mandato no deseado o incompleto.

-----------------

## RESUMEN DE LA LECCIÓN 2

1. Para borrar desde el cursor hasta el final de una palabra pulse:   dw

2. Para borrar desde el cursor hasta el final de una línea pulse:     d$

3. Para borrar una línea entera pulse:    dd

4. El formato de un mandato en modo Normal es:

    [número]   mandato   objeto   O   mandato   [número]   objeto
     donde:
       número - es cuántas veces se ha de ejecutar el mandato
       mandato - es lo que hay que hacer, por ejemplo, d para borrar
       objeto - es sobre lo que el mandato va a operar, por ejemplo
                w (palabra), $ (hasta el final de la línea), etc.

5. Para deshacer acciones previas pulse:               u (u minúscula)
     Para deshacer todos los cambios de una línea pulse: U (U mayúscula)
     Para deshacer lo deshecho pulse:                    CTRL-R  

-----------------

## RESUMEN DE LA LECCIÓN 3

1. Para sustituir texto que ha sido borrado, pulse  p . Esto Pone el texto
     borrado DESPUÉS del cursor (si lo que se ha borrado es una línea se
     situará sobre la línea que está sobre el cursor).

2. Para sustituir el carácter bajo el cursor, pulse   r   y luego el
     carácter que sustituirá al original.

3. El mandato change le permite cambiar el objeto especificado desde la
     posición del cursor hasta el final del objeto; e.g. Pulse  cw  para
     cambiar desde el cursor hasta el final de la palabra, c$  para cambiar
     hasta el final de la línea.

4. El formato para change es:

         [número]   c   objeto        O         c   [número]   objeto

  Pase ahora a la lección siguiente.

-----------------

## RESUMEN DE LA LECCIÓN 4

1. Ctrl-g  muestra la posición del cursor en el fichero y su estado.
     Mayu-G mueve el cursor al final del fichero. Un número de línea
     seguido de Mayu-G mueve el cursor a la línea con ese número.

2. Pulsando  /  seguido de una frase busca la frase hacia ADELANTE.
     Pulsando  ?  seguido de una frase busca la frase hacia ATRÁS.
     Después de una búsqueda pulse  n  para encontrar la aparición
     siguiente en la misma dirección.

3. Pulsando  %  cuando el cursor esta sobre (,), [,], { o } localiza
     la pareja correspondiente.

4. Para cambiar viejo por nuevo en una línea pulse          :s/viejo/nuevo
     Para cambiar todos los viejo por nuevo en una línea pulse :s/viejo/nuevo/g
     Para cambiar frases entre dos números de líneas pulse  :#,#s/viejo/nuevo/g
     Para cambiar viejo por nuevo en todo el fichero pulse  :%s/viejo/nuevo/g
     Para pedir confirmación en cada caso añada  'c'        :%s/viejo/nuevo/gc

-----------------

## RESUMEN DE LA LECCIÓN 5

1.  :!mandato  ejecuta un mandato externo.

      Algunos ejemplos útiles son:
          :!dir - muestra el contenido de un directorio.
          :!del NOMBRE_DE_FICHERO  -  borra el fichero NOMBRE_DE FICHERO.

2.  :#,#w NOMBRE_DE _FICHERO  guarda desde las líneas # hasta la # en el

3.  :r NOMBRE_DE _FICHERO  recupera el fichero del disco NOMBRE_DE FICHERO
     y lo inserta en el fichero en curso a partir de la posición del cursor.

-----------------

## RESUMEN DE LA LECCIÓN 6

1. Pulsando  o  abre una línea por DEBAJO del cursor y sitúa el cursor en
     la línea abierta en modo Insert.
     Pulsando una O mayúscula se abre una línea SOBRE la que está el cursor.

2. Pulse una  a  para insertar texto DESPUÉS del carácter sobre el cursor.
     Pulsando una  A  mayúscula añade automáticamente texto al final de la
     línea.

3. Pulsando una  R  mayúscula se entra en modo Replace hasta que, para salir,
     se pulse <ESC>.

4. Escribiendo «:set xxx» fija la opción «xxx»
