<template>
    <header>
        <div id="top_header" class="flx">
            <div class="flx gap-8 ai-c">
                <span>Atella 2023 season</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="7" viewBox="0 0 43 5.774">
                    <path d="M43,3.5,38,.613V6.387ZM0,4H38.5V3H0Z" transform="translate(0 -0.613)" fill="#fff"/>
                </svg>
                <span>23/50 units left</span>
            </div>
            <div class="flx gap-8 ai-c">
                <span>Atella 2023 season</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="7" viewBox="0 0 43 5.774">
                    <path d="M43,3.5,38,.613V6.387ZM0,4H38.5V3H0Z" transform="translate(0 -0.613)" fill="#fff"/>
                </svg>
                <span>23/50 units left</span>
            </div>
            <div class="flx gap-8 ai-c">
                <span>Atella 2023 season</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="7" viewBox="0 0 43 5.774">
                    <path d="M43,3.5,38,.613V6.387ZM0,4H38.5V3H0Z" transform="translate(0 -0.613)" fill="#fff"/>
                </svg>
                <span>23/50 units left</span>
            </div>
            <div class="flx gap-8 ai-c">
                <span>Atella 2023 season</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="7" viewBox="0 0 43 5.774">
                    <path d="M43,3.5,38,.613V6.387ZM0,4H38.5V3H0Z" transform="translate(0 -0.613)" fill="#fff"/>
                </svg>
                <span>23/50 units left</span>
            </div>
            <div class="flx gap-8 ai-c">
                <span>Atella 2023 season</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="7" viewBox="0 0 43 5.774">
                    <path d="M43,3.5,38,.613V6.387ZM0,4H38.5V3H0Z" transform="translate(0 -0.613)" fill="#fff"/>
                </svg>
                <span>23/50 units left</span>
            </div>
        </div>
        <nav>
            <div class="nav-wrapper grid grid-col-3 ai-c">
                <div>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 186 65">
                            <path id="Path_275" data-name="Path 275" d="M-1990,65V0h186V65Zm4-4h178V4h-178Zm153.968-11-1.3-3.816h-6.408L-1841.08,50h-3.793l6.48-17.136h3.865L-1828.12,50Zm-6.72-6.624h4.441l-2.16-6.288h-.049ZM-1866.976,50V32.864h3.768V46.832h8.352V50Zm-23.9,0V32.864h3.768V46.832h8.352V50Zm-25.223,0V32.864h12.816v3.168h-9.049V39.7h8.3v2.928h-8.3v4.2h9.24V50Zm-20.544,0V36.032h-5.136V32.864h14.04v3.168h-5.135V50Zm-16.656,0-1.3-3.816h-6.408L-1962.352,50h-3.792l6.48-17.136h3.864L-1949.392,50Zm-6.719-6.624h4.44l-2.16-6.288h-.048Z" transform="translate(1990)" fill="#bb9b74"/>
                        </svg>
                    </a>

                </div>
                <div class="jc-c flx">
                    <ul class="flx">
                        <li><router-link to="/">Your Atella</router-link></li>
                        <li><a href="#">How it works</a></li>
                        <li><a href="#">Details</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
                <div class="txt-a-r">
                    <router-link to="/configure" class="a-btn button-primary br-32 btn-lng">Configure</router-link>
                </div>
                
            </div>
            <!-- <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> -->
        </nav>
    </header>
</template>
<script>
export default {
    name: 'PageHeader'
}
</script>
<style lang="scss" scoped>
#top_header{
    padding: 8px 0;
    background-color: var(--secondary-color);
    color: #fff;
    gap: 80px;
    overflow: hidden;
    span {
        white-space: nowrap;
        overflow: hidden;
    }
}
.nav-wrapper{
    width: 90%;
    margin-inline: auto
}
nav {
    padding: 30px;
    a {
        padding: 16px;
        white-space: nowrap;
        overflow: hidden;
        &:hover {
            color: var(--secondary-color);
        }
    }
}
</style>