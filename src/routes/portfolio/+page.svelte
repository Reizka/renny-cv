<script>
import pf from "$lib/data/portfolio.json" 
import ItemTypeOne from './portfolioComponent.svelte';
import List from './ListHandler.svelte';

    const mapped = pf.map((x)=>{
        let p ={
            title: x.title,
            short_description: x.short_description,
            type:x.type,
            keywords:  x.keywords,
            long_description: x.long_description,
            imageName: x.imageName,
            url: x.url,
            type: x.type,
            component: ItemTypeOne
        }
        return p;
    })
</script>

<h1>
	Items
    {mapped.length}
</h1>
<List items={mapped} />