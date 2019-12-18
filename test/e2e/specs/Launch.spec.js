import utils from '../utils'

describe('Launch', function () {
  before(utils.before)
  // after(utils.after)

  it('shows the proper application title', function () {
    return this.app.client.getTitle()
      .then(title => {
        expect(title).to.equal('pilot-project')
      })
  })

  it('should detect if the banner is visible', function () {
    const isVisible = this.app.client.$('#banner')
    console.log(isVisible)
    return isVisible.isVisible()
      .then(banner => {
        expect(banner).to.equal(true)
      })
  })

  it('should give me the banners width', function () {
    const banner = this.app.client.$('#banner')
    return banner.getElementSize('width')
      .then(size => {
        expect(size).to.equal(1120)
      })
  })
})
