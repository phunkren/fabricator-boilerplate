export default class ExternalLinks {

  constructor() {
    this.links = document.querySelectorAll('a');

    this.init();
  }

  init() {
    const allLinks = Array.from(this.links);
    const externalLinks = allLinks.filter(this.filterExternalLinks);

    this.addTargetBlank(externalLinks);
  }

  // Return all links where the href hostname is different to the site's
  filterExternalLinks(links) {
    return links.hostname && links.hostname !== location.hostname;
  }

  // Add target="_blank" attribute to external links
  addTargetBlank(links) {

    let link;

    for (link = 0; link < links.length; link++) {
      links[link].setAttribute('target', '_blank');
    }
  }
}
