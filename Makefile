.PHONY: publish
publish:
	ssh dse@webonastick.com 'cd git/dse.d/text-converter && git pull'
