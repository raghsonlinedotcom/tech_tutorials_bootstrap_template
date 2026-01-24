# Tutorial href Link Mapping

All "Coming Soon" tutorial cards should have href links even though buttons are disabled.
This allows future activation by simply enabling the button.

## URL Pattern
`coming-soon/{category}/{tutorial-name}/`

## Link Mappings by Category

### Java & JVM (3)
- Core Java → `href="coming-soon/java-jvm/core-java/"`
- Advanced Java → `href="coming-soon/java-jvm/advanced-java/"`
- Java Design Patterns → `href="coming-soon/java-jvm/java-design-patterns/"`

### Java Versions (16)
- Java 2 → `href="coming-soon/java-versions/java2/"`
- Java 5 → `href="coming-soon/java-versions/java5/"`
- Java 7 → `href="coming-soon/java-versions/java7/"`
- Java 8 → `href="coming-soon/java-versions/java8/"`
- Java 9 → `href="coming-soon/java-versions/java9/"`
- Java 10 → `href="coming-soon/java-versions/java10/"`
- Java 11 → `href="coming-soon/java-versions/java11/"`
- Java 12 → `href="coming-soon/java-versions/java12/"`
- Java 13 → `href="coming-soon/java-versions/java13/"`
- Java 14 → `href="coming-soon/java-versions/java14/"`
- Java 15 → `href="coming-soon/java-versions/java15/"`
- Java 16 → `href="coming-soon/java-versions/java16/"`
- Java 17 → `href="coming-soon/java-versions/java17/"`
- Java 19 → `href="coming-soon/java-versions/java19/"`
- Java 21 → `href="coming-soon/java-versions/java21/"`
- Java 25 → `href="coming-soon/java-versions/java25/"`

### Communication Protocols (2)
- REST API → `href="coming-soon/communication-protocols/rest-api/"`
- GraphQL → `href="coming-soon/communication-protocols/graphql/"`

### Testing & Quality (3)
- JUnit → `href="coming-soon/testing-quality/junit/"`
- Mockito → `href="coming-soon/testing-quality/mockito/"`
- TestContainers → `href="coming-soon/testing-quality/testcontainers/"`

### Spring Framework (6)
- Spring Core → `href="coming-soon/spring-framework/spring-core/"`
- Spring Boot → `href="coming-soon/spring-framework/spring-boot/"`
- Spring Data JPA → `href="coming-soon/spring-framework/spring-data-jpa/"`
- Spring Web MVC → `href="coming-soon/spring-framework/spring-web-mvc/"`
- Spring REST → `href="coming-soon/spring-framework/spring-rest/"`
- Spring Transactions → `href="coming-soon/spring-framework/spring-transactions/"`

### Web Development (5)
- HTML → `href="coming-soon/web-development/html/"`
- CSS → `href="coming-soon/web-development/css/"`
- JavaScript → `href="coming-soon/web-development/javascript/"`
- Bootstrap → `href="coming-soon/web-development/bootstrap/"`
- Angular → `href="coming-soon/web-development/angular/"`

### Backend Frameworks (3)
- Node.js → `href="coming-soon/backend-frameworks/nodejs/"`
- Express.js → `href="coming-soon/backend-frameworks/expressjs/"`
- PHP → `href="coming-soon/backend-frameworks/php/"`

### Databases (7)
- RDBMS → `href="coming-soon/databases/rdbms/"`
- MySQL → `href="coming-soon/databases/mysql/"`
- PostgreSQL → `href="coming-soon/databases/postgresql/"`
- SQLite → `href="coming-soon/databases/sqlite/"`
- H2 Database → `href="coming-soon/databases/h2/"`
- MongoDB → `href="coming-soon/databases/mongodb/"`
- Firebase → `href="coming-soon/databases/firebase/"`

### Messaging & Event Streaming (1)
- Kafka → `href="coming-soon/messaging-event-streaming/kafka/"`

### Build Tools & DevOps (5)
- Gradle → `href="coming-soon/build-tools-devops/gradle/"`
- Git → `href="coming-soon/build-tools-devops/git/"`
- Jenkins → `href="coming-soon/build-tools-devops/jenkins/"`
- Docker → `href="coming-soon/build-tools-devops/docker/"`
- OpenShift → `href="coming-soon/build-tools-devops/openshift/"`

### Other Languages & Tools (5)
- Python → `href="coming-soon/other-languages-tools/python/"`
- Bash → `href="coming-soon/other-languages-tools/bash/"`
- Regex → `href="coming-soon/other-languages-tools/regex/"`
- Markdown → `href="coming-soon/other-languages-tools/markdown/"`
- Agile → `href="coming-soon/other-languages-tools/agile/"`

## Implementation

Replace buttons like:
```html
<button class=\"btn btn-outline-secondary\" disabled>Coming Soon</button>
```

With:
```html
<a href="coming-soon/{category}/{tutorial}/" class=\"btn btn-outline-secondary disabled\" aria-disabled=\"true\">Coming Soon</a>
```

This way the href is present but button appears disabled until we're ready to activate.
