model.Crew = function Crew(experience, module)
{
    this.experience = experience;
    this.module = module;
};

model.Crew.prototype.toJson = function()
{
	return {
		experience: this.experience,
		modulePosition: this.module.position
	};
};
