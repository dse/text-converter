SSH_DEST = dse@webonastick.com
REPOS_DIR = ~/git/dse.d/text-converter
REPOS_URL = git@github.com:dse/text-converter.git
SYMLINK = /www/webonastick.com/htdocs/text

DOCUMENT_ROOT = $(REPOS_DIR)/docs

default:
	gulp sass

publish:
	ssh $(SSH_DEST) '\
		if [ -d $(REPOS_DIR) ] ; then \
			cd $(REPOS_DIR) && git pull ; \
		else \
			cd "$$(dirname $(REPOS_DIR))" && git clone $(REPOS_URL) ; \
		fi ; \
		ln -n -f -s $(DOCUMENT_ROOT) $(SYMLINK)'
