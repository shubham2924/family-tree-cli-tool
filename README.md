## Instructions
1. Design a command line system which can help a user define his family tree.
2. Write code in any language of your choice
3. We want to understand your:
1. design skills
2. thoughts on future complexity / evolution of this program
4. We are looking for a strong solution following functional programming
principles OR good Object Oriented Solution
5. Please submit the solution as a zip file/upload the solution to a drive and
share the link

### Define a family tree:
Design a command line tool (family-tree) that has the following options:
family-tree add person <name>
eg: family-tree add Amit Dhakad
family-tree add relationship <name>
eg: family-tree add relationship father
eg: family-tree add relationship son
family-tree connect <name 1> as <relationship> of <name 2>
eg: family-tree connect Amit Dhakad as son of KK Dhakad

### Queries:
Based on relations created, we should be able to make following queries
family-tree count sons of <name>
This should count sons
family-tree count daughters of <name>
This should count of all daughters

family-tree count wives of <name>
This should count wives
family-tree father of <name>
This should return father name

## Solution:
- Have used commander npm package to ease the input command & respective look-up function processing 
- Have used conf npm package to globally manage the state of user's current(active) family tree
- Have used chalk npm package for better formatting of the output/results.