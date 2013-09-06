FTLEffectShader = {

    uniforms: {
        "tDiffuse": { type: "t", value: null },
//        "tSize":    { type: "v2", value: new THREE.Vector2( 256, 256 ) },
//        "center":   { type: "v2", value: new THREE.Vector2( 0.5, 0.5 ) },
//        "angle":    { type: "f", value: 1.57 },
//        "scale":    { type: "f", value: 1.0 },
        "time":     { type: "f", value: 0.0 }
    },

    vertexShader: [

        "varying vec2 vUv;",

        "void main() {",
            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
        "}"

    ].join("\n"),

    fragmentShader: [

//        "uniform vec2 center;",
//        "uniform float angle;",
//        "uniform float scale;",
//        "uniform vec2 tSize;",

        "uniform float time;",
        "uniform sampler2D tDiffuse;",

        "varying vec2 vUv;",

//        "float pattern() {",
//            "float s = sin( angle ), c = cos( angle );",
//            "vec2 tex = vUv * tSize - center;",
//            "vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;",
//            "return ( sin( point.x ) * sin( point.y ) ) * 4.0;",
//        "}",

        "float rand(vec2 co) {",
            "return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453);",
        "}",

        "void main() {",
            "vec4 color = texture2D( tDiffuse, vUv );",
//            "float average = ( color.r + color.g + color.b ) / 3.0;",
//            "gl_FragColor = vec4( vec3( average * 10.0 - 5.0 + pattern() ), color.a );",
            "gl_FragColor = vec4((cos(time / 1000.0) + 1.0) / 2.0, color.y, color.z, color.a);",
        "}"

    ].join("\n")

};
