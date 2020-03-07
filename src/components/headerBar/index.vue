<template>
    <header>
        <div class="auto">
            <div class="logo"><img src="./img/logo.png" alt="smiletotravel" /></div>
            <div class="tool">
                <div class="btn">線上訂車</div>
                <div class="btn">常見問題</div>
                <div class="btn">訂單查詢</div>
                <div class="btn">評價司機</div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'HeaderBar'
};
</script>

<style lang="scss" scoped>
header {
    background: $green;
    height: 56px;
    width: 100%;
    color: #fff;
    line-height: 56px;
    .auto {
        position: relative;
        width: 1440px;
        @media screen and (max-width: 1440px) {
            width: 1224px;
        }
        @media screen and (max-width: 1224px) {
            width: 96%;
        }
        margin: auto;
        .logo {
            width: 120px;
            img {
                float: left;
                margin-top: 8px;
                height: 40px;
            }
        }
        .tool {
            position: absolute;
            display: flex;
            right: 0;
            .btn {
                font-size: 18px;
                padding: 0 24px;
                &:hover {
                    background: $deep-green;
                }
            }
        }
    }
}
</style>
