const cds = require('@sap/cds')
const { INSERT } = require('@sap/cds/lib/ql/cds-ql')
describe('CAPVAL Tests', () => {
  const { expect, GET, POST, PATCH, DELETE } = cds.test(__dirname + '/..')
  it('testing POST', async () => {   // Jest & Mocha
    let error
    try {
      const data = await POST('odata/v4/catalog/Books',
        { title: "201", stock: 1 }
      )
    } catch (e) {
      error = e
    }
    expect(error.response.data.error.message
    ).to.eql('Release Date has to be to be set')
  })

  it('testing PATCH', async () => {   // Jest & Mocha
    let error
    try {
      const data = await PATCH('odata/v4/catalog/Books(1)',
        { title: "201", stock: 1,releaseDate:null }
      )
    } catch (e) {
      error = e
    }
    expect(error.response.data.error.message
    ).to.eql('Release Date has to be to be set')
  })



})