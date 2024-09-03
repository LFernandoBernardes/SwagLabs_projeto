# SwagLabs_projeto

### Introdução
Este é um projeto de estudo de QA (Garantia de Qualidade) para o site open-source SwagLabs. O objetivo deste projeto é planejar o documentar os requisitos de negócio; critérios de aceites; planejar e executar cenários de teste manuais e automatizados; gerar relatórios de Testes.

![Capa_SwagLaabs](/Apresentações/Capa_SwagLabs.png)

### Documentação de Requisitos e Cenários de Testes
Iniciei o projeto com um planejamento, organizando as sprints através de entregas, documentando os requisitos e critérios de aceitação. Essa documentação foi fundamental para alinhar expectativas e garantir que todos os testes fossem direcionados e precisos. (pasta Documentos)

### Realização dos Testes Manuais
Desenvolvi e organizei os planos de testes, suites e casos de testes manualmente. A execução destes permitiu validar funcionalidades críticas do SwagLabs, especialmente diferenciando os comportamentos entre os perfis standard_user e problem_user. Essa documentação serve como um guia para futuras manutenções. (pasta Suites Testes Manuias)

### Automação de Testes E2E
Avançando no projeto, criei e executei testes automatizados para as features críticas como Login e testes e2e dos perfis {standard_user e problem_user}. A automação desses testes visa garantir a estabilidade e eficiência da aplicação, especialmente em futuros ciclos de desenvolvimento. Esses testes foram integrados ao CI, assegurando que a qualidade fosse mantida continuamente.

### Relatórios de Testes pelo Cypress Cloud
Após a execução dos testes automatizados, compilei relatórios detalhados usando o Cypress Cloud. Este é um conhecimento que adquiri do curso "Cypress, do Zero à Nuvem" da escola online Talking About Testing, onde aprendi como integrar um projeto Cypress com o serviço Cypress Cloud.  

## Installation
```bash
npm install
```
> **NOTE: **
>
> It is necessary to have **node** installed

##Running
```bash
#You open the Cypress UI
npx cypress open

# Run the automation by command line
npx cypress run
``` 

### Conclusão
Cada etapa desse processo, apoiada por ferramentas como Jira, QASE.io, Cypress e GitHub, reflete meu compromisso com a excelência em QA. 
Por ser um trabalho de estudos, onde os bugs não serão trabalhados em nenhum momento. Os testes automatizados tiveram muitos bugs. O certo seria corrigi-los após os testes manuais, assim diminuir a quantidade deles na automação. 
Podemos ver que como o usuário {problem_user} foi feito realmente para ter problemas com isso  a automação desta feature basicamente travou em quase todos os Casos de Teste. Mas podemos ver um bom desenpenho do standard_user, reportando somente um bug simples. 

Em projetos reais os testes automatizados não são feitos para caçar bugs, mas si para a manutenção do sistema, auxiliando em novas integrações.