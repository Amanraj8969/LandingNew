package org.jhipster.authentication.repository;

import org.jhipster.authentication.domain.Authority;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data MongoDB repository for the Authority entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AuthorityRepository extends MongoRepository<Authority, String> {}
