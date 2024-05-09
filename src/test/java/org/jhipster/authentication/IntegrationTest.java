package org.jhipster.authentication;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.jhipster.authentication.config.AsyncSyncConfiguration;
import org.jhipster.authentication.config.EmbeddedMongo;
import org.jhipster.authentication.config.JacksonConfiguration;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = { AuthenticationApp.class, JacksonConfiguration.class, AsyncSyncConfiguration.class })
@EmbeddedMongo
public @interface IntegrationTest {
}
