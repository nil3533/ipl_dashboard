package io.nirmalya.ipldashboard.repo;

import org.springframework.data.repository.CrudRepository;

import io.nirmalya.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {

	Team findByTeamName(String teamName);
}
