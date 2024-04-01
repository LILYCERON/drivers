const { expect } = require('chai');

// Importamos el modelo
const { Teams } = require('../src/db');

describe('Team Model', () => {
  it('should create a team', async () => {
    const team = await Teams.create({
      name: 'Sample Team',
    });

    expect(team.id).to.be.a('string'); // El ID debería ser una cadena (UUID)
    expect(team.name).to.equal('Sample Team');
  });

  it('should require a name', async () => {
    try {
      await Teams.create({
        // No se proporciona el nombre, lo cual debería causar un error
      });
      // Si la creación no arroja un error, la prueba falla
      throw new Error('Team creation should have failed');
    } catch (error) {
      // Verifica que el error se deba a la falta de nombre
      expect(error.name).to.equal('SequelizeValidationError');
      expect(error.errors[0].message).to.equal('teams.name cannot be null');
    }
  });
});
