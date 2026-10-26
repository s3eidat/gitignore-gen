/* Gitignore Gen — hand-written templates, merged locally. */
(function () {
  "use strict";
  var $ = S3.$, $$ = S3.$$;

  // [id, name, group, keywords, body]
  var T = [
    ["node", "Node.js", "Language", "npm yarn pnpm javascript typescript bun", `
# Dependencies
node_modules/
jspm_packages/
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Build output and caches
dist/
build/
coverage/
.nyc_output/
.cache/
.eslintcache
.stylelintcache
*.tsbuildinfo
.parcel-cache/
.turbo/

# Environment
.env
.env.*
!.env.example`],
    ["python", "Python", "Language", "pip venv pytest jupyter poetry conda", `
# Byte-compiled files
__pycache__/
*.py[cod]
*$py.class

# Packaging
build/
dist/
*.egg-info/
.eggs/
wheels/
pip-wheel-metadata/

# Virtual environments
.venv/
venv/
env/
ENV/

# Tests and tooling
.pytest_cache/
.coverage
.coverage.*
htmlcov/
.tox/
.nox/
.mypy_cache/
.ruff_cache/
.pyre/

# Jupyter
.ipynb_checkpoints/

# Environment
.env`],
    ["java", "Java / Gradle / Maven", "Language", "kotlin jvm gradle maven spring", `
# Compiled files
*.class
*.jar
*.war
*.ear
hs_err_pid*

# Gradle
.gradle/
build/
!gradle/wrapper/gradle-wrapper.jar

# Maven
target/
pom.xml.tag
pom.xml.releaseBackup
pom.xml.versionsBackup
release.properties
dependency-reduced-pom.xml

# Kotlin
.kotlin/`],
    ["android", "Android", "Mobile", "kotlin gradle apk studio", `
# Gradle and build
.gradle/
build/
captures/
.externalNativeBuild/
.cxx/
*.apk
*.aab
*.ap_
*.dex

# Local configuration
local.properties

# Android Studio
*.iml
.idea/
.navigation/

# Signing keys
*.jks
*.keystore

# Generated
gen/
out/
google-services.json`],
    ["ios", "iOS / Xcode", "Mobile", "swift xcode apple cocoapods carthage spm", `
# Xcode
build/
DerivedData/
*.xcuserstate
xcuserdata/
*.xccheckout
*.moved-aside
*.hmap
*.ipa
*.dSYM.zip
*.dSYM

# Swift Package Manager
.build/
.swiftpm/

# CocoaPods
Pods/

# Carthage
Carthage/Build/

# fastlane
fastlane/report.xml
fastlane/Preview.html
fastlane/screenshots/**/*.png
fastlane/test_output`],
    ["flutter", "Flutter / Dart", "Mobile", "dart pub", `
# Dart and Flutter
.dart_tool/
.packages
.pub-cache/
.pub/
build/
.flutter-plugins
.flutter-plugins-dependencies
*.g.dart.tmp

# Generated platform files
**/ios/Flutter/.last_build_id
**/ios/Flutter/Generated.xcconfig
**/ios/Flutter/flutter_export_environment.sh
**/android/app/debug
**/android/app/profile
**/android/app/release

# Symbols and obfuscation
app.*.symbols
app.*.map.json`],
    ["reactnative", "React Native", "Mobile", "expo metro", `
# Dependencies
node_modules/

# Metro and Expo
.metro-health-check*
.expo/
web-build/
expo-env.d.ts

# Native builds
ios/Pods/
ios/build/
android/.gradle/
android/app/build/
android/build/
*.jsbundle

# Signing
*.keystore
!debug.keystore
*.jks
*.p8
*.p12
*.mobileprovision`],
    ["unity", "Unity", "Game", "game engine csharp", `
# Unity generated folders
/[Ll]ibrary/
/[Tt]emp/
/[Oo]bj/
/[Bb]uild/
/[Bb]uilds/
/[Ll]ogs/
/[Uu]ser[Ss]ettings/
/[Mm]emoryCaptures/
/[Rr]ecordings/

# Asset meta data should only be ignored when the corresponding asset is also ignored
!/[Aa]ssets/**/*.meta

# IDE and generated project files
.vs/
.consulo/
*.csproj
*.unityproj
*.sln
*.suo
*.user
*.userprefs
*.pidb
*.booproj
*.svd
*.pdb
*.mdb
*.opendb
*.VC.db

# Builds
*.apk
*.aab
*.unitypackage
crashlytics-build.properties`],
    ["unreal", "Unreal Engine", "Game", "game engine cpp ue5", `
# Unreal generated folders
Binaries/
DerivedDataCache/
Intermediate/
Saved/
Build/
.vs/

# Project files that are generated
*.sln
*.VC.db
*.opensdf
*.opendb
*.sdf
*.suo
*.xcodeproj
*.xcworkspace

# Compiled files
*.pdb
*.dll
*.exe
*.dylib
*.so

# Plugins keep their source
Plugins/**/Binaries/
Plugins/**/Intermediate/`],
    ["go", "Go", "Language", "golang", `
# Binaries
*.exe
*.exe~
*.dll
*.so
*.dylib
/bin/

# Test output
*.test
*.out
coverage.*
*.coverprofile

# Workspace and vendoring
go.work
go.work.sum
vendor/

# Environment
.env`],
    ["rust", "Rust", "Language", "cargo", `
# Build output
target/
debug/

# Backup files from rustfmt
**/*.rs.bk

# Debug info
*.pdb

# Libraries can ignore the lock file; applications should commit it
# Cargo.lock`],
    ["cpp", "C / C++", "Language", "c cmake make clang gcc", `
# Object files
*.o
*.ko
*.obj
*.elf
*.d

# Precompiled headers
*.gch
*.pch

# Libraries
*.lib
*.a
*.la
*.lo
*.dll
*.so
*.so.*
*.dylib

# Executables
*.exe
*.out
*.app

# CMake
CMakeCache.txt
CMakeFiles/
cmake-build-*/
cmake_install.cmake
compile_commands.json
build/`],
    ["dotnet", ".NET / C#", "Language", "csharp visual studio nuget aspnet", `
# Build results
[Bb]in/
[Oo]bj/
[Dd]ebug/
[Rr]elease/
x64/
x86/
[Ll]og/
[Ll]ogs/

# Visual Studio
.vs/
*.suo
*.user
*.userosscache
*.sln.docstates
*.rsuser

# NuGet
*.nupkg
*.snupkg
**/packages/*
!**/packages/build/
project.lock.json
project.fragment.lock.json

# Tests
TestResults/
[Tt]est[Rr]esult*/
*.trx
coverage*.json
coverage*.xml

# Publish
publish/
*.pubxml
appsettings.Development.json`],
    ["php", "PHP / Laravel", "Language", "composer laravel symfony", `
# Composer
/vendor/
composer.phar

# Laravel
/node_modules/
/public/build/
/public/hot
/public/storage
/storage/*.key
/storage/pail
.env
.env.backup
.env.production
.phpunit.result.cache
.phpunit.cache/
Homestead.json
Homestead.yaml
auth.json
npm-debug.log
yarn-error.log

# Caches
.php-cs-fixer.cache
.php_cs.cache`],
    ["wordpress", "WordPress", "Framework", "wp cms php", `
# WordPress core config and uploads
wp-config.php
wp-content/uploads/
wp-content/upgrade/
wp-content/cache/
wp-content/backup-db/
wp-content/backups/
wp-content/blogs.dir/
wp-content/advanced-cache.php
wp-content/wp-cache-config.php
wp-content/debug.log
sitemap.xml
sitemap.xml.gz

# Environment
.htaccess
.env`],
    ["rails", "Ruby / Rails", "Framework", "ruby bundler gem", `
# Bundler
/.bundle
/vendor/bundle

# Rails
/log/*
/tmp/*
!/log/.keep
!/tmp/.keep
/storage/*
!/storage/.keep
/public/assets
/public/packs
/node_modules
/config/master.key
/config/credentials/*.key
.byebug_history

# Gems and tests
*.gem
/coverage/
/spec/reports/
.rspec_status

# Environment
.env`],
    ["django", "Django", "Framework", "python web", `
# Django
*.log
local_settings.py
db.sqlite3
db.sqlite3-journal
media/
staticfiles/
/static_root/

# Python
__pycache__/
*.py[cod]
.venv/
venv/
.env`],
    ["nextjs", "Next.js", "Framework", "react vercel node", `
# Next.js
/.next/
/out/
next-env.d.ts

# Production
/build

# Vercel
.vercel

# Dependencies
node_modules/

# Environment
.env*.local
.env`],
    ["vite", "Vite", "Framework", "react vue svelte frontend", `
# Vite
node_modules/
dist/
dist-ssr/
*.local
.vite/

# Logs
*.log

# Environment
.env
.env.*.local`],
    ["docker", "Docker", "Tool", "container compose", `
# Docker
.docker/
docker-compose.override.yml
*.tar

# Environment files passed to containers
.env
*.env`],
    ["terraform", "Terraform", "Tool", "hcl iac infrastructure", `
# Local .terraform directories
.terraform/
*.tfstate
*.tfstate.*

# Crash logs
crash.log
crash.*.log

# Variable files often hold secrets
*.tfvars
*.tfvars.json

# Overrides
override.tf
override.tf.json
*_override.tf
*_override.tf.json

# CLI config
.terraformrc
terraform.rc
.terraform.lock.hcl.bak`],
    ["macos", "macOS", "OS", "mac apple finder", `
# macOS
.DS_Store
.AppleDouble
.LSOverride
._*
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent
Icon?`],
    ["windows", "Windows", "OS", "explorer microsoft", `
# Windows
Thumbs.db
Thumbs.db:encryptable
ehthumbs.db
ehthumbs_vista.db
*.stackdump
[Dd]esktop.ini
$RECYCLE.BIN/
*.lnk`],
    ["linux", "Linux", "OS", "ubuntu unix", `
# Linux
*~
.fuse_hidden*
.directory
.Trash-*
.nfs*`],
    ["vscode", "VS Code", "Editor", "visual studio code editor", `
# VS Code: keep shared settings, ignore personal state
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
!.vscode/*.code-snippets
.history/
*.vsix`],
    ["jetbrains", "JetBrains", "Editor", "intellij idea webstorm pycharm android studio rider", `
# JetBrains IDEs
.idea/
*.iml
*.ipr
*.iws
out/
.fleet/`],
    ["vim", "Vim", "Editor", "neovim nvim", `
# Vim
[._]*.s[a-v][a-z]
[._]*.sw[a-p]
[._]s[a-rt-v][a-z]
[._]ss[a-gi-z]
[._]sw[a-p]
Session.vim
Sessionx.vim
.netrwhist
*~
tags
[._]*.un~`]
  ];
  var BY = {}; T.forEach(function (t) { BY[t[0]] = t; });

  function build(ids, opt) {
    opt = opt || {};
    var seen = Object.create(null), parts = [], total = 0, dupes = 0;
    function section(title, body) {
      var lines = body.replace(/^\n+|\s+$/g, "").split("\n"), out = [];
      lines.forEach(function (l) {
        var key = l.trim();
        if (key && key[0] !== "#") {
          if (opt.dedupe !== false && seen[key]) { dupes++; return; }
          seen[key] = true; total++;
        }
        if (!opt.headers && key[0] === "#") return;
        out.push(l);
      });
      // drop comment lines left without patterns under them, and doubled blank lines
      var clean = [];
      out.forEach(function (l, i) {
        if (/^\s*#/.test(l)) {
          var j = i + 1; while (j < out.length && out[j].trim() && /^\s*#/.test(out[j])) j++;
          if (j >= out.length || !out[j].trim()) return;
        }
        if (!l.trim() && (!clean.length || !clean[clean.length - 1].trim())) return;
        clean.push(l);
      });
      while (clean.length && !clean[clean.length - 1].trim()) clean.pop();
      if (!clean.length) return;
      parts.push((opt.headers ? "### " + title + " ###\n" : "") + clean.join("\n"));
    }
    ids.forEach(function (id) { if (BY[id]) section(BY[id][1], BY[id][4]); });
    if (opt.custom && opt.custom.trim()) section("Custom", opt.custom);
    var head = opt.headers && parts.length ? "# Generated with Gitignore Gen (https://s3eidat.github.io/gitignore-gen/)\n# Templates: " + ids.map(function (id) { return BY[id] ? BY[id][1] : id; }).join(", ") + (opt.custom && opt.custom.trim() ? ", Custom" : "") + "\n\n" : "";
    return { text: parts.length ? head + parts.join("\n\n") + "\n" : "", patterns: total, dupes: dupes };
  }

  // ================= UI =================
  var chipsBox = $("#chips"), out = $("#out");
  var sel = (S3.store("gi.sel") || []).filter(function (id) { return BY[id]; });
  var state = { text: "" };
  var savedOpts = S3.store("gi.opts") || {};
  $("#custom").value = savedOpts.custom || "";
  if (savedOpts.headers === false) $("#headers").checked = false;
  if (savedOpts.dedupe === false) $("#dedupe").checked = false;

  var groups = ["Language", "Framework", "Mobile", "Game", "Tool", "OS", "Editor"];
  groups.forEach(function (g) {
    var wrap = S3.h("div", { "class": "gi-group", "data-group": g }, [S3.h("span", { "class": "gi-glabel", text: g })]);
    T.filter(function (t) { return t[2] === g; }).forEach(function (t) {
      var b = S3.h("button", { type: "button", "class": "gi-chip", "data-id": t[0], "aria-pressed": "false", text: t[1] });
      b.addEventListener("click", function () { toggle(t[0]); });
      wrap.appendChild(b);
    });
    chipsBox.appendChild(wrap);
  });
  function toggle(id) {
    var i = sel.indexOf(id);
    if (i >= 0) sel.splice(i, 1); else sel.push(id);
    render();
  }
  function filter() {
    var q = $("#search").value.trim().toLowerCase();
    $$(".gi-chip").forEach(function (b) {
      var t = BY[b.dataset.id];
      b.hidden = !!q && (t[1] + " " + t[0] + " " + t[3]).toLowerCase().indexOf(q) < 0;
    });
    $$(".gi-group").forEach(function (g) { g.hidden = !$$(".gi-chip", g).some(function (b) { return !b.hidden; }); });
  }
  function render() {
    S3.store("gi.sel", sel);
    S3.store("gi.opts", { custom: $("#custom").value, headers: $("#headers").checked, dedupe: $("#dedupe").checked });
    $$(".gi-chip").forEach(function (b) { b.setAttribute("aria-pressed", String(sel.indexOf(b.dataset.id) >= 0)); });
    $("#count").textContent = sel.length ? sel.length + " selected" : T.length + " available";
    var r = build(sel, { headers: $("#headers").checked, dedupe: $("#dedupe").checked, custom: $("#custom").value });
    state.text = r.text;
    if (!r.text) {
      out.innerHTML = "";
      out.appendChild(S3.h("div", { "class": "empty" }, [S3.h("b", { text: "Pick at least one template" }), "Or start from a quick pick on the left."]));
      $("#info").textContent = ""; return;
    }
    out.innerHTML = r.text.split("\n").map(function (l) {
      if (/^###/.test(l)) return '<span class="gi-h">' + S3.esc(l) + "</span>";
      if (/^#/.test(l)) return '<span class="gi-c">' + S3.esc(l) + "</span>";
      if (/^!/.test(l)) return '<span class="gi-n">' + S3.esc(l) + "</span>";
      return S3.esc(l);
    }).join("\n");
    $("#info").textContent = r.patterns + " patterns" + (r.dupes ? " · " + r.dupes + " duplicates removed" : "");
  }

  $("#search").addEventListener("input", filter);
  $("#search").addEventListener("keydown", function (e) {
    if (e.key === "Enter") { var first = $$(".gi-chip").filter(function (b) { return !b.hidden; })[0]; if (first) { first.click(); $("#search").select(); } }
  });
  $("#none").addEventListener("click", function () { sel = []; render(); });
  $$("[data-preset]").forEach(function (b) { b.addEventListener("click", function () { sel = b.dataset.preset.split(","); render(); }); });
  $("#custom").addEventListener("input", S3.debounce(render, 250));
  $("#headers").addEventListener("change", render);
  $("#dedupe").addEventListener("change", render);
  $("#copy").addEventListener("click", function () { if (state.text) { S3.copy(state.text); S3.done(); } else S3.toast("Pick a template first", "error"); });
  $("#save").addEventListener("click", function () { if (state.text) { S3.download(state.text, ".gitignore", "text/plain"); S3.done(); } else S3.toast("Pick a template first", "error"); });

  window.S3_DEMO = function () { sel = ["node", "nextjs", "vscode", "macos"]; $("#custom").value = "secrets/\n*.local.json"; render(); };

  window.S3_SELFTEST = function () {
    var fails = [];
    function eq(name, a, b) { if (a !== b) fails.push(name + ": got " + JSON.stringify(a) + " want " + JSON.stringify(b)); }
    var r = build(["node", "nextjs"], { headers: true, dedupe: true, custom: "secrets/\nnode_modules/\n" });
    var lines = r.text.split("\n");
    eq("node_modules once", lines.filter(function (l) { return l === "node_modules/"; }).length, 1);
    eq("dupes counted", r.dupes >= 2, true);
    eq("header first", /^# Generated with Gitignore Gen/.test(r.text), true);
    eq("section headers", lines.indexOf("### Node.js ###") >= 0 && lines.indexOf("### Next.js ###") > lines.indexOf("### Node.js ###"), true);
    eq("custom last", lines.indexOf("secrets/") > lines.indexOf("### Custom ###"), true);
    eq("negation kept", lines.indexOf("!.env.example") > lines.indexOf(".env.*"), true);
    eq("no empty comment groups", /# Dependencies\n\n/.test(r.text), false);
    eq("ends with newline", /\n$/.test(r.text) && !/\n\n$/.test(r.text), true);
    var plain = build(["macos"], { headers: false });
    eq("no headers", /#/.test(plain.text), false);
    eq("all templates unique ids", Object.keys(BY).length, T.length);
    eq("no dedupe", build(["node", "nextjs"], { dedupe: false }).text.split("\n").filter(function (l) { return l === "node_modules/"; }).length, 2);
    eq("empty", build([], {}).text, "");
    T.forEach(function (t) { if (!build([t[0]], { headers: true }).patterns) fails.push("empty template " + t[0]); });
    return fails.length ? fails : true;
  };

  filter(); render();
})();
