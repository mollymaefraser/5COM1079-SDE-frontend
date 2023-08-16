<script>

import { Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink } from 'flowbite-svelte'

</script>


<Footer footerType="logo">
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterBrand
        href=""
        src="/favicon.png"
        alt="MedIntelligence Logo"
        name="MedIntelligence"
      />
      <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
        <FooterLink href="/licensing">Licensing</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
      </FooterLinkGroup>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <FooterCopyright href="/" by="MedIntelligence™" />
  </Footer>