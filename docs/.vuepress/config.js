module.exports = {
  title: 'Kitsu Documentation',
  description: 'Documentation for the production tracker Kitsu',
  head: [
     ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./img/favicon.ico` }]
  ],
  themeConfig: {
   sidebar: [{
     title: 'Guide',
     collapsable: false,
     children: [
       ['/', 'Introduction'],
       '/getting-started-production/',
	   '/getting-started-advanced/',
       '/getting-started-artist/',
	   '/getting-started-client/',	   
       '/permissions/',
       '/slack/',
       '/custom-actions/'
     ]
   },
    {
     title: 'Modules',
     collapsable: false,
     children: [
       '/Schedules/',
       '/batch-action/',
	   '/playlist/'
     ]
	}, 
	{
     title: 'FAQ',
     collapsable: false,
     children: [
       '/faq/'
       ]
	}, 
    {
     title: 'Open Source Setup',
     collapsable: false,
     children: [
       '/installation/',
       '/development-environment/'
     ]
    }]
  }
}