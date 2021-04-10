<script>
    import logo from '../assets/images/logo.svg';
    import msLogo from '../assets/images/ms_logo.svg';
</script>

<svelte:head>
    <title>Infinity cast - Se connecter</title>
</svelte:head>

<img id="logo" src="{logo}" />

<div id="login">
    <button id="login-button" class="clickable">
        <img id="ms-logo" src="{msLogo}" />
        <span>Se connecter avec Microsoft</span>
    </button>
    <p id="terms" class="subtext">
        En cliquant sur le bouton ci-dessus vous acceptez les <a class="link">conditions d’utilisation</a> du service
    </p>
</div>

<div id="footer">
    <div id="links">
        <a href="https://epimac.org/" rel="external" target="_blank">EpiMac</a>
        &nbsp;·&nbsp;
        <a href="https://github.com/EpiMac/infinity-cast" rel="external" target="_blank">GitHub</a>
        &nbsp;·&nbsp;
        <a>À Propos</a>
    </div>
    <p class="subtext">
        Copyright © 2021 Adrien ‘Litarvan’ Navratil et EpiMac<br/>
        Sous <a href="https://github.com/EpiMac/infinity-news/blob/master/LICENSE" rel="external" class="link">licence MIT</a>
    </p>
</div>

<style lang="scss">
    @import '../styles/vars';

    .subtext {
        color: $color-subtext;

        font-size: 16px;
        line-height: 22px;

        text-align: center;

        .link {
            color: $color-subtext-link;
        }
    }

    #logo {
        width: 375px;
        margin-top: 50px;
    }

    #login {
        flex-direction: column;
        width: 355px;

        #login-button {
            display: flex;
            justify-content: center;

            padding: 16px 0;

            border-radius: 5px;

            color: white;
            background: $gradient-login-button;

            font-family: $font-circular;
            font-size: 20px;
            font-weight: 500;

            $content-height: 28px;

            line-height: $content-height;

            #ms-logo {
                height: $content-height;
                margin-right: 16px;
            }
        }

        #terms {
            margin-top: 15px;
            padding: 0 15px;

            text-align: center;
        }
    }

    #footer {
        flex-direction: column;

        #links {
            justify-content: center;

            margin-bottom: 8px;

            font-weight: 500;
            font-size: 22px;

            color: $color-link;
        }
    }
</style>