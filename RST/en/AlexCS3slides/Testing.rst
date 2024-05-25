.. This file is part of the OpenDSA eTextbook project. See
.. http://opendsa.org for more details.
.. Copyright (c) 2012-2020 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata::
   :author: Cliff Shaffer

.. slideconf::
   :autoslides: False

=======
Testing
=======

Testing
-------

.. slide:: Debugging vs. Testing

   * Debugging: (Localizing and) fixing a (known) bug

   * Testing: Recognizing that you have a specific bug
   
   * Debugging is hard! Testing is harder. You probably don't have a
     lot of experience with testing.

   * JUnit tests are meant to help you test, and to help you **not** spend
     countless hours debugging.

   * Regression Testing: Include tests that verify all of your fixed
     bugs remain fixed as you continue to evolve your program.

     

.. slide:: Testing and Web-CAT

   * Anytime you submit to Web-CAT and fail a grader test that you did
     not expect to fail, it represents **YOUR failure** to properly
     test.

   * I am not your testing service. Nor is Web-CAT. We don't share our
     test cases.

   * Real problem: How to correct a mis-understanding.


.. slide:: Testing vs. Anti-Testing (1)

   * Testing means that you ran your program, and verified that
     certain behavior is correct.

   * Anti-testing (in the context of JUnit tests) is running a unit
     test that gives code coverage on lines that have not been
     positively verified to behave correctly.

   * Typical anti-test: Give the program a lot of commands (gets code
     coverage) and ignore the results (or copy a dump of the results
     back into the output check in order to "pass").
   
.. slide:: Testing vs. Anti-Testing (2)
                
   * Why Anit-testing is disasterous:
  
      * If you have real tests, then you can expect that your bugs are
        in the uncovered lines. So you know where to look.

      * Throw in an anti-test, and now you can't tell which lines are
        demonstrated correct and which are not.
