.. This file is part of the OpenDSA eTextbook project. See
.. http://opendsa.org for more details.
.. Copyright (c) 2012-2020 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata::
   :author: Alex Hicks

=========
Recursion
=========

Writing Recursive Methods (1)
-----------------------------

.. revealjs-slide::

* Solving problems recursively

* Figure out how to solve a smaller version of the problem

  * Use those solutions to solve the larger problem


Writing Recursive Methods (2)
-----------------------------

.. revealjs-slide::

.. inlineav:: recurWriteStepsCON ss
   :long_name: Recursion Code Writing Slideshow 1
   :scripts: AV/RecurTutor/recurWriteStepsCON.js
   :output: show
   :keyword: Recursion


Writing Recursive Methods (3)
-----------------------------

.. revealjs-slide::

* Lets see some different ways that we could write ``Sum`` recursively.

.. inlineav:: recurWriteSumCON ss
   :long_name: Recursion Code Writing Slideshow 2
   :scripts: AV/RecurTutor/recurWriteSumCON.js
   :output: show
   :keyword: Recursion


Evaluating Sum
--------------

.. revealjs-slide::

.. codeinclude:: RecurTutor/WrtSumV4.java


Factorial Example
-----------------

.. revealjs-slide::

.. inlineav:: recurTraceFactCON ss
   :long_name: Recursion Tracing Factorial Function
   :scripts: AV/RecurTutor/recurTraceFactCON.js
   :output: show
   :keyword: Recursion


Fibonacci Example
-----------------

.. revealjs-slide::

.. codeinclude:: RecurTutor/Fibonacci.java
