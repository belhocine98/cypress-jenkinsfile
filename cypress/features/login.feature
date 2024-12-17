Feature: test1

  @smoke
  Scenario: Login sur orangeHRM
  
    Given je suis sur la page orangeHRM
    When je rentre le username correct
    And password correct
    And je clique sur le bouton login
    Then je suis sur le dashbord


