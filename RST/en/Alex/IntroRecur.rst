.. This file is part of the OpenDSA eTextbook project. See
.. http://opendsa.org for more details.
.. Copyright (c) 2012-2020 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata::
   :author: Alex Hicks

============
Introduction
============

Who am I?
---------

.. revealjs-slide::

* Alex Hicks
* PhD Candidate in Computer Science Education at Virginia Tech
* Have used recursion before


What is Recursion?
------------------

.. revealjs-slide::

* Recursion

  * See Recursion :)

* A process in which the result of each repetition is dependent on the result of the next repetition

  * simplifies program structure at the cost of function calls

* Sesquipedalian

  * A person who uses words like sesquipedalian


Examples of Recursion (1)
-------------------------

.. revealjs-slide::

.. odsafig:: Images/recursion.jpg
   :width: 400
   :align: center
   :capalign: justify
   :figwidth: 90%
   :alt: recursive mirror


Examples of Recursion (2)
-------------------------

.. revealjs-slide::

* Fractals

  * Mandelbrot set - $z_{n+1} = z_n^2 + c$

.. odsafig:: Images/mandelbrot.png
   :width: 800
   :align: center
   :capalign: justify
   :figwidth: 90%
   :alt: mandelbrot set


Examples of Recursion (3)
-------------------------

.. revealjs-slide::

* MC Escher

.. odsafig:: Images/hands.jpg
   :width: 700
   :align: center
   :capalign: justify
   :figwidth: 90%
   :alt: mc escher hands


Examples of Recursion (4)
-------------------------

.. revealjs-slide::

* Contractors

  * Subcontractors

    * Sub-subcontractors

      * ...

Count Down
----------

.. revealjs-slide::

.. codeinclude:: RecurTutor/Countdown.java


Check Your Understanding (1)
----------------------------

.. revealjs-slide::

.. codeinclude:: RecurTutor/Check.java


Check Your Understanding (2)
----------------------------

.. revealjs-slide::

.. codeinclude:: RecurTutor/Freeze.java


Key Components
--------------

.. revealjs-slide::

* Base Case

  * Where the recursion stops!

* Recursive Case

  * That gets us closer to the base case


Recursive Methods
-----------------

.. revealjs-slide::

* Calls itself

* Takes input

* Has logic based on input

  * Leads to a recursive case

  * leads to a base case

* probably has an if statement

* probably does NOT have a loop


The Stack
---------

.. revealjs-slide::

.. odsafig:: Images/CallStack.png
   :width: 800
   :align: center
   :capalign: justify
   :figwidth: 90%
   :alt: stack of plates
