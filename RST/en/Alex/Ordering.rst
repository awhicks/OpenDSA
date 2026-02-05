.. This file is part of the OpenDSA eTextbook project. See
.. http://opendsa.org for more details.
.. Copyright (c) 2012-2020 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata::
   :author: Alex Hicks

========
Ordering
========

Ordering
--------

.. revealjs-slide::

* HOW should we order things?
* What are the rules?
* What does greater than/less than MEAN for a specific class?



ASCII Table
-----------

.. revealjs-slide::

.. odsafig:: Images/ascii_table.png
   :width: 600
   :align: center
   :capalign: justify
   :figwidth: 90%
   :alt: ascii_table


Implement Comparable
--------------------

.. revealjs-slide::

* Define a *compareTo* method to order objects
* String class defines compareTo
* For example if str and other are Strings, str.compareTo(other) returns:

   * **Negative** if *str* comes **before** *other*

   * **Zero** if *str* and *other* are **equal**

   * **Positive** if *str* comes **after** *other*


Comparable Interface Documentation
----------------------------------

.. raw:: html

   <iframe src="https://docs.oracle.com/javase/8/docs/api/java/lang/Comparable.html"
           width="960"
           height="550"
           frameborder="0"
           style="background: white; display: block; margin: 0 auto;">
   </iframe>


compareTo example
-----------------

.. revealjs-slide::

.. codeinclude:: Sorting/Student
   :tag: Comparable
