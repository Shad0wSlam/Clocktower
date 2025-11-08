---
layout: character
id: ordinator
summary: |
    The Ordinator knows how much evil wanted to kill each execution.

    - The Ordinator does not track votes on executions that did not go through, only the votes for the execution that happened.
    - If a good player votes on the execution, then becomes evil, the Ordinator does not count them.
    - If a player is executed without being voted on, the Ordinator learns a 0.
howtorun: |
  Each day, after tallying votes for an execution, mark all evil players who voted with a **VOTED** reminder, and unmark any who did not.

  Each night except the first, wake the Ordinator. Show fingers (0, 1, 2, etc.) equaling the number of players with **VOTED** reminders. Put the Ordinator to sleep. Remove all **VOTED** reminders.
examples:
  - There were two nominations today. In the first, the player received enough votes to be 'about to die', with 3 evil players voting. In the second, the player received greater votes and was executed, but only 1 evil player voted. That night, the Ordinator learns a 1.
  - There were three nominations today. The second and third nominations received more votes than the first, with 3 evil players voting in the third, but tied each other so no player was executed. That night, the Ordinator learns a 0.
  - There were no nominations today. A Traveller was exiled, and all players raised their hand to support the exile. That night, the Ordinator learns a 0. (Exiles are never affected by abilities.) 
---

## Tips & Tricks

